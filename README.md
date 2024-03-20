# radiant-bloom-pagination

[![npm version](https://img.shields.io/npm/v/radiant-bloom-pagination.svg?style=flat-square)](https://www.npmjs.com/package/radiant-bloom-pagination)

A customizable pagination component for React applications.

## Installation

You can install this package via npm:

```bash
npm install radiant-bloom-pagination
```

## Usage

```javascript
import React, { useState } from 'react';
import RadiantBloomPagination from 'radiant-bloom-pagination';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
    // Perform any action on page change
  };

  return (
    <div>
      {/* Your content here */}
      <RadiantBloomPagination
        pageCount={10} // Total number of pages
        onPageChange={handlePageChange} // Callback function for page change
      />
    </div>
  );
};

export default MyComponent;
```

## Props

- `pageCount`: (Number) The total number of pages.
- `onPageChange`: (Function) Callback function triggered when a page is changed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
