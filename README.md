# useIsMobile

A simple React hook to detect if the current screen size is considered mobile.

## Installation

You can install `useIsMobile` using npm:

```bash
npm install react_use_is_mobile
```

## Usage

```javascript
import React from "react";
import useIsMobile from "react_use_is_mobile";

function MyComponent() {
  const isMobile = useIsMobile();

  return <div>{isMobile ? <p>Mobile View</p> : <p>Desktop View</p>}</div>;
}
```

## How it works

The useIsMobile hook utilizes the window.innerWidth property to determine if the screen size is less than or equal to 768 pixels, considering it as a mobile view.

It also includes an event listener for the resize event to update the isMobile state dynamically when the screen size changes.
