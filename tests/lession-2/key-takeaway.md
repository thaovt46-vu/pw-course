# 1. Version Control System

# 2. Git

## Git vs GitHub
- **Git**: A distributed version control system for tracking changes in source code.  
- **GitHub**: A cloud-based hosting service for Git repositories, with collaboration features.  

## Git States
Git has three main states:
1. **Working Directory**: Contains new files and modified files.  
2. **Staging Area**: Files added here are prepared for commit.  
3. **Repository**: Stores all committed snapshots (commits).  

## Git Commands
- `git init` → Initialize a new Git repository in the current directory.  
- `git add <filename>` → Add a specific file from working directory to staging area.  
- `git add .` → Add all files from working directory to staging area.  
- `git commit -m "Commit message"` → Commit staged files to repository.  
- `git config user.name "Thao Vu"` and `git config user.email "thaoht46@gmail.com"` → Configure username and email for the specific repository.  
- `git config --global user.name "Thao Vu"` and `git config --global user.email "thaoht46@gmail.com"` → Configure username and email globally (applies to all repositories).  
- `git status` → Show current status of the working directory and staging area.  
- `git log` → Show commit history.  

## Git Commit Convention
- Use the following convention:  
- Use the following convention:  
<type>: <short description>

- **Types include**:  
- `chore`: Small fixes, deleting unused files, spelling errors, etc.  
- `feat`: Adding new features, test cases.  
- `fix`: Fixing bugs.  

## Git Simple Workflow
- With global config:  init → add → commit → push
- Without global config: init → config → add → commit → push

# 3. JavaScript

## Variables and Constants
- `var`, `let`, `const`  
- `var`, `let` → variables can be reassigned.  
- `const` → cannot be reassigned once initialized.  

## Operators
- **Comparison operators**: `<`, `>`, `<=`, `>=`, `===`, `!==`  
- **Unary operators**: `++`, `--` (e.g., `i++`, `i--`)  
- **Arithmetic operators**: `+`, `-`, `*`, `/`, `%`  

### Conditional Statement
if (condition) {
  // code
}
### Loop
for (initialization; condition; increment) {
    // code
}
