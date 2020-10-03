# see https://nixos.wiki/wiki/Development_environment_with_nix-shell
{}:
with import
  (
    builtins.fetchTarball {
      url = "https://github.com/NixOS/nixpkgs/archive/daaa0e33505082716beb52efefe3064f0332b521.tar.gz";
      sha256 = "15vprzpbllp9hy5md36ch1llzhxhd44d291kawcslgrzibw51f95";
    }
  )
{ };
mkShell {
  buildInputs = [ nodejs-12_x python3 firefox jre azure-storage-azcopy google-chrome ];
  shellHook = ''
    export CHROME_BIN=${google-chrome}/bin/google-chrome-stable
    export PATH=$(npm bin):$PATH

    link_selenium () {
      if [ -d "./node_modules" ]; then
        ln -sfnv "${chromedriver}/bin/chromedriver" "$(find "./node_modules" -path '**/chromedriver/*-chromedriver')"
        ln -sfnv "${geckodriver}/bin/geckodriver" "$(find "./node_modules" -path '**/geckodriver/*-geckodriver')"
      fi
    }
  '';
}
