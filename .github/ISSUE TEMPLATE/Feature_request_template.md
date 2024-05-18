name: 🆕 new feature request
description: Suggest an idea and show your creativity to add new feature
title: "[New Feature]: "

body:

- type: markdown
  attributes:
  value: |
  Thanks for taking the time to fill out your new feature issue
- type: textarea
  id: new-feature
  attributes:
  label: Problem:
  description: Describe the problem in brief.
  placeholder: Add all necessary details of the problem.
  value: "feature logic and basic description"
  validations:
  required: true
- type: textarea
  id: new-feature
  attributes:
  label: Solution:
  description: Describe the solution in brief.
  placeholder: Add all necessary details of the solution.
  value: "feature logic and basic description"
  validations:
  required: true
- type: textarea
  id: features
  attributes:
  label: Point down the features
  description: think about your the feature your feature will have
  placeholder: Please include a summary, also include relevant motivation and context.
  value: "feature points"
  validations:
  required: true
- type: dropdown
  id: contribution
  attributes:
  label: Select the program in which you are contributing
  multiple: true
  options: - GSSoC24 - Other
- type: checkboxes
  id: terms
  attributes:
  label: Code of Conduct
  description: By submitting this issue, you agree to follow our [CODE OF CONDUCT](https://github.com/Dev-tanay/Rubik-Cube/blob/main/README.md)
  options: - label: I follow [CONTRIBUTING GUIDELINE]() of this project.
  required: true
