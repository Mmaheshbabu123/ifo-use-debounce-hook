# ifo-use-debounce-hook
# use-debounce-hook

A simple and reusable React hook to debounce a value.

## Installation

You can install this package using npm or yarn.

### Using npm:

```sh
npm install ifo-use-debounce-hook
```

# Usage

Import the useDebounce hook and use it in your functional components.
```.jsx

import React, { useState } from 'react';
import useDebounce from 'ifo use-debounce-hook';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    // This effect will run only when debouncedSearchTerm changes
    if (debouncedSearchTerm) {
      // Perform the search or any side-effect here
      console.log('Search term:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default SearchInput;
```
# Contributing
<p>Author: Mahesh </p>
<p>Thanks for downloading package </p>

# License

This project is licensed under the MIT License. See the LICENSE file for more details.

