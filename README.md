# React Developer Tools Debugging Report

**Project:** React Counter Application

**Objective:** Identify and fix issues involving React state, props, and component behavior using React Developer Tools.

### Debugging Process

1. Created a React application using Vite with three components: App, Counter, and Display.
2. Installed React Developer Tools and inspected the component tree.
3. Inspected the state in App and the props passed to Counter and Display.
4. Identified two bugs:
   - The Counter component decreased the count instead of increasing it.
   - The Display component multiplied the count by 2 instead of displaying its actual value.
5. Corrected the increment function using a functional state update.
6. Updated Display to render the count prop directly.

### Verification

After applying the fixes, the application can be tested by clicking the Increment button and checking the updated state and props in React Developer Tools.

**Expected Result:** The counter increases by 1 with each click, and the displayed value matches the React state.

### Conclusion

This exercise demonstrates how React Developer Tools helps developers inspect component trees, monitor state and props, identify unexpected behavior, and debug React applications efficiently.