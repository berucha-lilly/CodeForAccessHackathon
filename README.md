# **CodeForAccessHackathon**

Welcome to the **Code for Access: The Accessibility Challenge** hackathon repository! This repository is designed to support participants as they work on accessibility-focused coding challenges using HTML, CSS, JavaScript, and React. Whether you're a beginner or an experienced developer, this space provides all the resources, guides, and starter code you need to participate successfully.

## **Overview**

The **Code for Access** hackathon aims to engage participants in building accessible web features that improve user experiences for people with disabilities. This collaborative effort emphasizes inclusive design, hands-on coding, and the real-world impact of accessible software.

## **Predefined Coding Challenges**

Each team will choose one of the following challenges:

1. **Color Contrast Enhancer:**  
   Develop a button that toggles between normal and high-contrast modes, meeting WCAG 2.1 AA standards to improve readability for users with visual impairments. Starter code and instructions can be found in the `/color-contrast-enhancer` folder.

2. **Accessible Form Validation:**  
   Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually accessible without relying solely on color. Starter code and instructions are located in the `/accessible-form-validation` folder.

3. **Keyboard-Friendly Navigation:**  
   Design a dynamic navigation menu fully functional with keyboard controls. Implement intuitive keyboard shortcuts and tab navigation, allowing users to explore the site without using a mouse. The starter code and instructions are in the `/keyboard-friendly-navigation` folder.

## **Repository Structure**

- **/public**  
  Contains public files, including `index.html`, which serves as the entry point for the application.

- **/resources**  
  Includes the following guides to assist participants:
  - **AccessibilityGuide.md**: Key accessibility principles and tips for each challenge.
  - **GitGuide.md**: Essential Git commands to manage branches and push code.
  - **ReactCheatSheet.md**: Quick reference for basic React concepts.

- **/src**  
  The main source folder containing all components and styling files:
  
  - **/components**  
    - **/AccessibleFormValidation**  
      - **FormValidation.js**: Starter code for the Accessible Form Validation challenge.
      - **instructions.md**: Instructions specific to this challenge.

    - **/ColorContrastEnhancer**  
      - **ContrastToggle.js**: Starter code for the Color Contrast Enhancer challenge.
      - **instructions.md**: Instructions specific to this challenge.

    - **/KeyboardFriendlyNavigation**  
      - **KeyboardNav.js**: Starter code for the Keyboard-Friendly Navigation challenge.
      - **instructions.md**: Instructions specific to this challenge.

  - **/css**  
    Contains CSS files for general styling and specific component styles:
    - **App.css**: Styles for the main application.
    - **ContrastToggle.css**: Styles for the Color Contrast Enhancer component.
    - **FormValidation.css**: Styles for the Accessible Form Validation component.
    - **KeyboardNav.css**: Styles for the Keyboard-Friendly Navigation component.
    - **index.css**: Basic and accessibility-focused styles.

- **App.js**  
  The main application file, which includes the layout and rendering logic.

- **index.js**  
  The entry point for rendering the React application.

- **.gitignore**  
  Specifies files and folders to be ignored by Git, such as node_modules and build outputs.

- **README.md**  
  The main documentation file with the overview, instructions, and checklist for the hackathon.

- **amplify.yml**  
  Configuration file for AWS Amplify to automate deployments for each branch.

- **package.json & package-lock.json**  
  Lists project dependencies and scripts used to run, build, and manage the application.

## **Getting Started**

### **1. Create Your Branch Before You Start Coding**

**Creating your own branch is critical as it allows AWS Amplify to create a unique deployment link for your team’s work. This ensures each team can see their progress live and demo their work effectively.** 

1. **Open the Code:**
   - Click the **Code** button on the repository's main page to open a Codespace or open the code in an IDE of your choosing.
   - Select **Open with Codespaces** and click **New Codespace** if using Codespace approach.

2. **Create Your Branch:**
   - Once inside your Codespace or IDE of choosing, open the terminal.
   - Create a new branch specific to your team:
     ```
     git checkout -b team-name
     ```
   - Example:
     ```
     git checkout -b team-shelley
     ```

3. **Push Your Branch to GitHub:**
   - Once your branch is created, push it to the CodeForAccessHackathon GitHub repo to trigger AWS Amplify to recognize your branch for deployment:
     ```
     git push origin your-branch-name
     ```

### **2. Work on Your Challenge**

1. Navigate to your assigned challenge folder (`/color-contrast-enhancer`, `/accessible-form-validation`, or `/keyboard-friendly-navigation`).
2. Follow the instructions in the `instructions.md` file specific to your challenge.
3. Use the provided starter code to build and test your solution or create your own files and start from scratch.

### **3. Commit and Push Your Changes Regularly**

- As you work on your code, make sure to regularly commit and push your changes to keep your branch updated. Verify that your changes pushed to the CodeForAccessHackathon GitHub repo specifically:
  ```
  git add .
  git commit -m "Describe your changes here"
  git push origin your-branch-name
  ```

### **4. View Your Live Deployment Link**

- AWS Amplify will automatically generate a live deployment link for your branch once it's pushed to GitHub. Your unique URL will be added to the Deployment Links section of this README shortly after pushing your branch.
- Use this link to view your work live and prepare for your demonstration.

## **AWS Amplify Deployment Links** ##
This section lists the deployment links generated by AWS Amplify for each branch. As branches are created and deployed, you can reference this table for the corresponding links to view the live versions of each team's work. (Give 5 mins after branch creation for deployment link to get generated and added)

| **Branch Name**         | **Deployment Link** (Does not open in new tab)                                      |
|-------------------------|----------------------------------------------------------|
| `test-contrast`  (sample solution code for the color contrast challenge component)       | [View Deployment](https://test-contrast.dxxmujgcp190n.amplifyapp.com/)    |
| `test-keyboard`  (sample solution code for the keyboard navigation challenge component)       | [View Deployment](https://test-keyboard.dxxmujgcp190n.amplifyapp.com/) |
| `test-form`  (sample solution code for the accessible form challenge component)           | [View Deployment](https://test-form.dxxmujgcp190n.amplifyapp.com/) |


# TODO/Bug Checklist

Use this checklist to ensure you address all required tasks and fix all intentional bugs in your chosen challenge.

## General Setup

### App.js
- [ ] TODO: Change the active component in the `useEffect` hook to display your chosen challenge ('ContrastToggle', 'FormValidation', or 'KeyboardNav').

## Accessible Form Validation Challenge

### FormValidation.js
- [ ] Bug 1: Fix the validation logic - it should trigger an error when input is empty.
- [ ] Bug 2: The error message lacks proper accessibility attributes.
- [ ] TODO 1: Implement real-time validation in the `handleChange` function.
- [ ] TODO 2: Add success message display.

### FormValidation.css
- [ ] TODO 1: Add a clear focus state for keyboard navigation.
- [ ] TODO 2: Ensure sufficient color contrast for the button.
- [ ] TODO 3: Style error messages to be visually distinct without relying solely on color.
- [ ] TODO 4: Add styles for success messages.

## Color Contrast Enhancer Challenge

### ContrastToggle.js
- [ ] Bug 1: Fix the `aria-pressed` attribute to accurately reflect the button state.
- [ ] TODO 1: Add more text elements with varying sizes to test contrast.

### ContrastToggle.css
- [ ] TODO 1: Update color values to meet WCAG 2.1 AA standards for high contrast.
- [ ] TODO 2: Style the button appropriately for both contrast modes, including clear focus styles for keyboard navigation.
- [ ] TODO 3: Ensure text is readable in both contrast modes.
- [ ] TODO 4: Add styles for different text sizes to improve readability.

## Keyboard-Friendly Navigation Challenge

### KeyboardNav.js
- [ ] Bug 1: Correct the logic for moving down the menu using the down arrow key.
- [ ] Bug 2: Fix the alert implementation for selected items.
- [ ] TODO 1: Implement logic to move focus up the menu using the up arrow key.

### KeyboardNav.css
- [ ] TODO 1: Implement proper focus styles for keyboard navigation.
- [ ] TODO 2: Ensure sufficient color contrast for accessibility when an item is focused.
- [ ] TODO 3: Add distinct styles for keyboard focus vs. mouse hover.

## General Tasks for All Challenges
- [ ] Test your implementation using keyboard-only navigation.
- [ ] Verify that all interactive elements are reachable and operable without a mouse.
- [ ] Check color contrast ratios using tools like WebAIM's Contrast Checker.
- [ ] Test with screen readers to ensure all content and state changes are announced properly.
- [ ] Ensure that the focus order is logical and follows the visual layout of the component.
- [ ] Verify that error messages and important state changes are communicated to assistive technologies.

## **Resources**

- **React Cheat Sheet**: Quick reference for basic React concepts in the `/resources` folder.
- **Accessibility Guide**: Key accessibility principles and tips for each challenge.
- **Git Guide**: Essential Git commands to manage branches and push code.

## **Sharing Learnings and Demonstrations**

At the end of the hackathon, each team will use their AWS Amplify deployment link to demo their work, showcasing how their feature improves accessibility. Teams will also share their coding process, challenges faced, and insights gained.

## **Support and Contact**

- **Need Help?** Feel free to reach out via Teams during the hackathon for real-time support.
- **Contact the Coordinator:** If you have questions or run into issues, feel free to contact the event coordinators directly.
