# jh-modal

Welcome to the jh-modal ! This package provides a simple and customizable modal component for React applications, designed to be easily integrated and styled according to your needs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [Props](#props)

## Installation

Install my-project with npm

```bash
  npm install jh-modal
```

# Usage

## Basic Example

```js
import React, { useState } from "react";
import Modal from "jh-modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        title="Employee successfully created"
        buttonName="Got it!"
        onClick={handleClose}
        onClose={handleClose}
      />
    </div>
  );
};

export default App;
```

## Props

| Prop                 | Type                | Description                                             |
| -------------------- | ------------------- | ------------------------------------------------------- |
| title                | string              | Title of the modal                                      |
| subtitle             | string \| undefined | Subtitle of the modal                                   |
| buttonName           | string \| undefined | Name of the button                                      |
| onClose              | func                | Callback fired when the component requests to be closed |
| onClick              | func                | Callback fired when the button is clicked               |
| backgroundColor      | string              | Custom color on modal overlay                           |
| modalBackgroundColor | string              | Custom color on modal window                            |
| customCloseIcon      | node                | Custom close icon                                       |
