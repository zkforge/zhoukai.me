---
description: Generate a full Conventional Commit message based on file changes.
argument-hint: TYPE=<feat|fix|docs|style|refactor|test|chore> [SCOPE=<module>] [MESSAGE="short summary"] [FILE=<path>]
---

# Conventional Commit Generator

Analyze the file `$FILE`, summarize its key changes, and generate a **complete commit message** following the Conventional Commits format.

---

**Step 1: Detect Commit Type**

Type: `$TYPE`
Scope: `$SCOPE`
Short summary: `$MESSAGE`
---

**Step 2: Summarize File Changes**

Review the diff in `$FILE` and describe what has been added, modified, or removed in concise language.
Emphasize the purpose of each change rather than listing every line.

---

**Step 3: Output a full Conventional Commit message**

The final commit should include:
$TYPE($SCOPE): $MESSAGE

## Body
<Explain WHY these changes were made and HOW they work.>
<List key improvements, architectural notes, or logic changes.>

## Footer
<Issue references, breaking changes, or notes.>
e.g. Closes #123, BREAKING CHANGE: updated API response format.
---

## Example Outputs

### Example 1
feat(auth): add JWT token refresh mechanism

Added automatic JWT token renewal using background scheduler.
Refactored auth middleware to handle expired tokens gracefully.
Improved error handling for invalid credentials.

Closes #87

### Example 2
fix(api): resolve timeout bug

Adjusted request retry logic to properly handle 504 errors.
Added timeout fallback for long-running network requests.

Closes #215