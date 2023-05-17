<h1 align="center">Hi 👋 I'm <a href="https://github.com/ElianDochev" target="blank">
Eliyan Dochev</a>!</h1>
<h2 align="center">Get started with React, Typescript and Material UI</h3>

<h3 align="center" > <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="30" height="30" style="margin-right: 10px;">Get in touch with me 🤝 </h3>

<p align="center">

 <div align="center"  class="icons-social" style="margin-left: 10px;">
        <a style="margin-left: 10px;"  target="_blank" href="https://www.linkedin.com/in/elian-dochev-8a53a9250/">
			<img src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"></a>
        <a style="margin-left: 10px;" target="_blank" href="https://github.com/ElianDochev">
		<img src="https://img.icons8.com/doodle/40/000000/github--v1.png"></a>
		<a style="margin-left: 5px;" target="_blank" href="mailto:eliyan.dochev@epitech.eu">
					<img style="width: 40px; height: 40px" src="https://image.similarpng.com/very-thumbnail/2021/09/Outlook-icon-on-transparent-background-PNG.png" ></a>
      </div>
</p>

## Introduction

This repo is related to an [Epitech workshop](https://www.epitech.eu/) </br>
This workshop will allow you to build your first (or not) React app using Typescript and Material UI</br>

## Let's start !

### Step 0 - Requirement & Configuration

#### Fork the repository

For the needs of the workshop, you'll need to fork the GitHub repository on your profile.</br>
This will help us to mark you as present.
Please, fork it as a public repository, or we could not access to it, and you'll be marked as absent.

**Documentaion https://docs.github.com/en/get-started/quickstart/fork-a-repo**

Then, clone the repository on your local machine.

```bash
git clone git@github.com:ElianDochev/WorkshopReact_TS_MUI.git
```

#### Install NodeJS

You will need to install [NodeJS](https://nodejs.org/en) on your machine.</br>

```bash
## On Fedora
sudo dnf install nodejs

## On Debian
sudo apt install nodejs
```

after that go to the root of the project and run the following command

```bash
npm install
```

to start the project run

```bash
npm start
```

### Step 1 - Theme setup

Using the theme provided in src/theme.tsx, create a theme
provider for your app in **src/index.tsx** <br>

Hint: Wrap the App component <br>

**Documentation [MUI theaming](https://material-ui.com/customization/theming/)**

### Step 2 - Create states

using the useState hook, create a state for the following variables in **src/App.tsx**

- prevValue
- currentValue (default value 0)
- operator
- overwrite

**Documentation [useState](https://reactjs.org/docs/hooks-state.html) , [State lifecycle](https://legacy.reactjs.org/docs/state-and-lifecycle.html)**

### Step 3 - Create your first interface

In **src/DigitButton.tsx** create an interface for the props of the component and use it

**Documentation [Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces) , [Props and Interfaces](https://www.pluralsight.com/guides/use-interface-props-in-functional-components-using-typescript-with-react)**

### Step 4 - Configure your first MUI component

In **src/OperationButton.tsx** configure the Button component from MUI to fullwidth, variant outlined and set the onClick to selectOperation fuction

**Documentation [Button](https://material-ui.com/components/buttons/)**

### Step 5 - Finish the calculator

In **src/App.tsx** finish the calculator by implementing UI and logic
Remeber use grid MUI component for the layout
example:

```jsx
<Container maxWidth="sm">
  <CalculatorBase elevation={3}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <OutputContainer data-testid="output">{currentValue}</OutputContainer>
        {/* ... */}
  </CalculatorBase>
</Container>
```

**Documentation [Grid](https://material-ui.com/components/grid/)**
