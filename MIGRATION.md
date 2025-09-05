## Migration Strategy & Phases

The migration will follow a systematic bottom-up approach to minimize breaking changes and maintain a working codebase throughout the process.

### Phase 1: Core Types & Utilities (Foundation) 🔄

**Goal**: Establish core type definitions and convert utility functions that have no dependencies.

**Files to migrate first (3-35 lines each)**:

1. `src/lib/utils.js` (3 lines) - Core symbols and simple utilities
2. `src/lib/icons.js` (66 lines) - SVG icon templates
3. `src/grouped-list/index.js` (1 line) - Simple barrel export
4. `src/lib/settings/drivers/index.js` (3 lines) - Driver exports
5. `src/lib/settings/index.js` (3 lines) - Settings exports

**Core type definitions to create**:

```typescript
// src/types/core.ts
export interface OmnitableItem {
	[key: string]: unknown;
}

export interface ColumnConfig {
	name: string;
	title: string;
	valuePath: string;
	priority?: number;
	width?: number;
	minWidth?: number;
	flex?: number;
	disabled?: boolean;
	// ... other properties
}

// src/types/column.ts - Column interface definitions
// src/types/events.ts - Custom event type definitions
// src/types/components.ts - Component prop interfaces
```

### Phase 2: Generic Utilities & Helpers 📊

**Goal**: Convert standalone utility functions and generic helpers.

**Files to migrate (35-80 lines each)**:

1. `src/lib/generic-sorter.js` (35 lines) - Sorting algorithms
2. `src/lib/utils-data.js` (42 lines) - Data manipulation utilities
3. `src/lib/use-canvas-width.js` (12 lines) - Canvas width hook
4. `src/lib/use-mini.js` (30 lines) - Mini mode logic
5. `src/lib/polymer-haunted-render-mixin.js` (18 lines) - Polymer integration
6. `src/lib/save-as-csv-action.js` (32 lines) - CSV export utility
7. `src/lib/save-as-xlsx-action.js` (25 lines) - XLSX export utility

**Key benefits**:

- Establish patterns for hook typing
- Create utility type definitions
- Build confidence with smaller, isolated files

### Phase 3: Settings & Configuration System ⚙️

**Goal**: Convert the settings system which is relatively self-contained.

**Files to migrate (16-77 lines each)**:

1. `src/lib/settings/drivers/context.js` (16 lines)
2. `src/lib/settings/drivers/local.js` (29 lines)
3. `src/lib/settings/drivers/remote.js` (22 lines)
4. `src/lib/settings/normalize.js` (77 lines)
5. `src/lib/settings/use-saved-settings.js` (44 lines)
6. `src/lib/settings/use-settings.js` (53 lines)

**Dependencies**: Phase 1 & 2 utilities

### Phase 4: Data Processing & State Management 🔄

**Goal**: Convert core data processing logic and state management hooks.

**Files to migrate (71-265 lines each)**:

1. `src/lib/use-hash-state.js` (71 lines) - URL state management
2. `src/lib/use-sort-and-group-options.js` (104 lines) - Sorting/grouping state
3. `src/lib/use-processed-items.js` (265 lines) - Data processing pipeline
4. `src/grouped-list/use-weak-state.js` (21 lines) - Weak state management
5. `src/grouped-list/use-selected-items.js` (141 lines) - Selection state
6. `src/grouped-list/use-collapsible-items.js` (32 lines) - Collapsible state

**Dependencies**: Settings system, utilities

### Phase 5: Column Type Utilities 📝

**Goal**: Convert column-specific utility files and mixins.

**Files to migrate (112-211 lines each)**:

1. `src/lib/utils-number.js` (112 lines) - Number utilities
2. `src/lib/utils-date.js` (211 lines) - Date utilities
3. `src/lib/utils-time.js` (115 lines) - Time utilities
4. `src/lib/utils-datetime.js` (71 lines) - DateTime utilities
5. `src/lib/utils-amount.js` (147 lines) - Amount/currency utilities
6. `src/lib/cosmoz-omnitable-date-input-mixin.js` (183 lines) - Date input mixin

**Key focus**:

- Establish strong typing for data processing functions
- Create type-safe validation and conversion utilities
- Define interfaces for different data types (numbers, dates, amounts)

### Phase 6: Layout & Rendering System 🎨

**Goal**: Convert layout computation and rendering logic.

**Files to migrate (32-81 lines each)**:

1. `src/lib/use-layout.js` (32 lines) - Layout hooks
2. `src/lib/layout.js` (64 lines) - Layout calculations
3. `src/lib/compute-layout.js` (72 lines) - Layout computation
4. `src/lib/use-fast-layout.js` (73 lines) - Optimized layout
5. `src/lib/use-resizable-columns.js` (63 lines) - Resizable columns
6. `src/lib/render-header.js` (51 lines) - Header rendering
7. `src/lib/render-footer.js` (65 lines) - Footer rendering
8. `src/lib/render-list.js` (81 lines) - List rendering

**Dependencies**: Core utilities, data processing

### Phase 7: Range Input 📊

**Goal**: Convert range input components (most complex individual files).

**Files to migrate (122-490 lines each)**:

1. `src/lib/cosmoz-omnitable-range-input-mixin.js` (490 lines) - Base range input
2. `src/lib/cosmoz-omnitable-amount-range-input.js` (358 lines) - Amount ranges
3. `src/lib/cosmoz-omnitable-number-range-input.js` (179 lines) - Number ranges
4. `src/lib/cosmoz-omnitable-date-range-input.js` (125 lines) - Date ranges
5. `src/lib/cosmoz-omnitable-datetime-range-input.js` (122 lines) - DateTime ranges
6. `src/lib/cosmoz-omnitable-time-range-input.js` (131 lines) - Time ranges

**Key challenges**:

- Complex mixin patterns
- Event handling and state management
- UI component integration

### Phase 8: Column Components 🗂️

**Goal**: Convert individual column components.

**Files to migrate (92-198 lines each)**:

1. `src/cosmoz-omnitable-column-mixin.js` (150 lines) - Base column mixin
2. `src/cosmoz-omnitable-column.js` (100 lines) - Basic column
3. `src/cosmoz-omnitable-column-boolean.js` (159 lines) - Boolean column
4. `src/cosmoz-omnitable-column-autocomplete.js` (119 lines) - Autocomplete column
5. `src/cosmoz-omnitable-column-list-mixin.js` (198 lines) - List column base
6. `src/cosmoz-omnitable-column-list.js` (92 lines) - List column
7. `src/cosmoz-omnitable-column-list-horizontal.js` (67 lines) - Horizontal list
8. `src/cosmoz-omnitable-column-list-data.js` (133 lines) - Data list column
9. `src/cosmoz-omnitable-column-number.js` (157 lines) - Number column
10. `src/cosmoz-omnitable-column-amount.js` (166 lines) - Amount column
11. `src/cosmoz-omnitable-column-date.js` (137 lines) - Date column
12. `src/cosmoz-omnitable-column-time.js` (141 lines) - Time column
13. `src/cosmoz-omnitable-column-datetime.js` (150 lines) - DateTime column

**Dependencies**: Range inputs, column utilities, mixins

### Phase 9: Core Components & Hooks 🧩

**Goal**: Convert core table components and main hooks.

**Files to migrate (99-263 lines each)**:

1. `src/lib/use-dom-columns.js` (167 lines) - DOM column management
2. `src/lib/use-omnitable.js` (99 lines) - Main table hook
3. `src/lib/use-public-interface.js` (108 lines) - Public API
4. `src/lib/use-list.js` (263 lines) - List management
5. `src/grouped-list/utils.js` (87 lines) - Grouped list utilities
6. `src/grouped-list/use-cosmoz-grouped-list.js` (115 lines) - Grouped list hook

**Dependencies**: All previous phases
Components

### Phase 10: UI Components 🎯

**Goal**: Convert UI components and row renderers.

**Files to migrate (12-78 lines each)**:

1. `src/cosmoz-omnitable-item-expand.js` (28 lines) - Item expand component
2. `src/cosmoz-omnitable-item-expand-line.js` (39 lines) - Expand line
3. `src/cosmoz-omnitable-item-row.js` (38 lines) - Item row
4. `src/cosmoz-omnitable-group-row.js` (12 lines) - Group row
5. `src/cosmoz-omnitable-header-row.js` (78 lines) - Header row
6. `src/grouped-list/cosmoz-grouped-list-row.js` (41 lines) - Grouped list row
7. `src/grouped-list/cosmoz-grouped-list.js` (13 lines) - Grouped list
8. `src/ui-helpers/cosmoz-clear-button.js` (69 lines) - Clear button

### Phase 11: Main Components & Styles 🏗️

**Goal**: Convert main table component and styling.

**Files to migrate (10-585 lines each)**:

1. `src/cosmoz-omnitable-skeleton.js` (70 lines) - Loading skeleton
2. `src/cosmoz-omnitable-columns.js` (10 lines) - Columns component
3. `src/cosmoz-omnitable-styles.js` (585 lines) - Main styles
4. `src/lib/settings/style.css.js` (260 lines) - Settings styles
5. `src/lib/settings/cosmoz-omnitable-settings.js` (182 lines) - Settings component
6. `src/cosmoz-omnitable.js` (83 lines) - **Main component**

## Migration Guidelines

### TypeScript Configuration Updates

As we progress through phases, we'll gradually strengthen TypeScript settings:

**Phase 1-3 (Permissive)**:

```json
{
	"strict": false,
	"allowJs": true,
	"checkJs": false,
	"noImplicitAny": false
}
```

**Phase 4-7 (Moderate)**:

```json
{
	"strict": true,
	"allowJs": true,
	"noImplicitAny": true,
	"strictNullChecks": true
}
```

**Phase 8+ (Strict)**:

```json
{
	"strict": true,
	"allowJs": false,
	"noImplicitAny": true,
	"strictNullChecks": true,
	"exactOptionalPropertyTypes": true
}
```

### Code Patterns & Standards

1. **Import/Export Patterns**:

   - Use explicit type imports: `import type { Type } from './types'`
   - Maintain barrel exports for public APIs
   - Use consistent naming conventions

2. **Type Definitions**:

   - Create interfaces for all component props
   - Define union types for enums and constants
   - Use generic types for reusable components

3. **Event Handling**:

   - Type all custom events with proper detail types
   - Use proper DOM event types
   - Define event handler interfaces

4. **Component Props**:
   - Use readonly for immutable props
   - Define optional vs required properties clearly
   - Use discriminated unions for variant props

### Testing Strategy

- **Unit Tests**: Update tests as files are converted
- **Integration Tests**: Ensure backward compatibility
- **Type Tests**: Add type-only tests for complex types
- **Build Verification**: Continuous compilation checks

### Risk Mitigation

1. **Incremental Migration**: Each phase can be merged independently
2. **Backward Compatibility**: Maintain dual .js/.ts support during transition
3. **Rollback Strategy**: Each phase can be reverted if issues arise
4. **Feature Flags**: Use conditional compilation if needed

## Success Metrics

- ✅ All files compile without TypeScript errors
- ✅ All existing tests continue to pass
- ✅ Type coverage above 85%
- ✅ No runtime regressions
- ✅ Improved developer experience (better IDE support, autocomplete)
- ✅ Documentation improvements through typed interfaces

## Estimated Timeline

- **Phase 1-3**: 1-2 weeks (Foundation & utilities)
- **Phase 4-6**: 2-3 weeks (Core logic & rendering)
- **Phase 7-8**: 3-4 weeks (Complex components)
- **Phase 9-11**: 2-3 weeks (Main components & polish)

**Total Estimated Duration**: 8-12 weeks for complete migration

## Files Structure

```
├── src/                          # Source files (JavaScript → TypeScript)
│   ├── types/                    # TypeScript type definitions
│   │   ├── core.ts              # Core interfaces and types
│   │   ├── column.ts            # Column-related types
│   │   ├── events.ts            # Event type definitions
│   │   └── components.ts        # Component prop interfaces
│   ├── cosmoz-omnitable*.ts     # Main component files
│   ├── lib/                     # Utility and helper modules
│   ├── grouped-list/            # Grouped list functionality
│   └── ui-helpers/              # UI helper components
├── dist/                        # Compiled output (auto-generated)
│   ├── *.js                     # Compiled JavaScript
│   ├── *.d.ts                   # Type declarations
│   └── *.js.map                 # Source maps
├── test/                        # Tests (updated to use src/ paths)
├── demo/                        # Demo files (updated to use src/ paths)
└── tsconfig.json                # TypeScript configuration
```

## Migration Strategy

The current setup allows for gradual migration:

1. **Development**: Import from `src/` (JavaScript files, gradual TypeScript conversion)
2. **Production**: Import from `dist/` (compiled JavaScript with type definitions)
3. **Both paths supported**: Package exports allow importing from either location

This enables teams to:

- Continue developing with existing JavaScript files
- Gradually convert files to TypeScript
- Always have a working build
- Maintain backward compatibility

## Files Structure

```
├── src/                          # Source files (JavaScript → TypeScript)
│   ├── cosmoz-omnitable*.js      # Main component files
│   ├── lib/                      # Utility and helper modules
│   ├── grouped-list/             # Grouped list functionality
│   └── ui-helpers/               # UI helper components
├── dist/                         # Compiled output (auto-generated)
│   ├── *.js                      # Compiled JavaScript
│   ├── *.d.ts                    # Type declarations
│   └── *.js.map                  # Source maps
├── test/                         # Tests (updated to use src/ paths)
├── demo/                         # Demo files (updated to use src/ paths)
└── tsconfig.json                 # TypeScript configuration
```
