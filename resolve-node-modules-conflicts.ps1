# Resolve the 7 node_modules conflicts: keep current (Windows win32) files
# Run from repo root: .\resolve-node-modules-conflicts.ps1

git add node_modules/.package-lock.json
git add node_modules/@esbuild/win32-x64/
git add node_modules/@parcel/watcher-win32-x64/
git add "node_modules/@parcel/watcher/node_modules/@parcel/watcher-win32-x64/"
git add node_modules/@tailwindcss/oxide-win32-x64-msvc/
git add "node_modules/@tailwindcss/vite/node_modules/@tailwindcss/oxide-win32-x64-msvc/"
git add "node_modules/@tailwindcss/vite/node_modules/lightningcss-win32-x64-msvc/"
git add node_modules/lightningcss-win32-x64-msvc/
git add "node_modules/rollup/node_modules/@rollup/rollup-win32-x64-msvc/"

Write-Host "Staged node_modules conflicts (kept current/Windows versions). Check Source Control - if no conflicts remain, commit the merge."