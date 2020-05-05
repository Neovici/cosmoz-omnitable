# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import (
  builtins.fetchTarball {
    url = "https://github.com/NixOS/nixpkgs/archive/fce7562.tar.gz";
    sha256 = "14rvi69ji61x3z88vbn17rg5vxrnw2wbnanxb7y0qzyqrj7spapx";
  }
) {};
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH
  '';
}
