# Portable Modules

This directory contains modules from the original `src/` directory that have been reorganized for easier portability into other projects.

The main subdirectories are:

*   `components/`: Contains UI components, including general-purpose UI elements (often from a UI library like ShadCN/UI) and application-specific components like charts and panels.
*   `hooks/`: Contains custom React hooks used within the application.
*   `lib/`: Contains utility functions and other shared library code.

## Usage in Another Project

To use these modules in another project:

1.  Copy the desired directories (e.g., `components/`, `hooks/`, `lib/`) from this `portable/` directory into your target project's source folder (e.g., `your-project/src/`).
2.  Ensure that your project has an alias configured for `@/` that points to your source root (e.g., `src/`). Most modern React frameworks (like Next.js, Create React App with Craco/Rescripts, or Vite) support this via `tsconfig.json` or `jsconfig.json` (`compilerOptions.paths`) and bundler configuration (e.g., `vite.config.js`'s `resolve.alias`).
    Example for `tsconfig.json`:
    ```json
    {
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@/*": ["src/*"]
        }
      }
    }
    ```
3.  Update any import paths within the copied files if your target project's structure or alias configuration differs significantly. For example, if you copy these into a `your-project/src/my-portable-modules/` directory and your alias is still `@/*` for `src/*`, imports like `from "@/portable/components/..."` would need to become `from "@/my-portable-modules/components/..."`. It's often easiest to place the `components`, `hooks`, and `lib` directories directly under your aliased `src/` path.
4.  Install any necessary dependencies. Check the `package.json` of this project for dependencies used by these modules (e.g., UI libraries, charting libraries).

This reorganization aims to make the core logic and UI elements more self-contained for easier reuse.
