# DataGridLM-React
[Official website and documentation is here](https://lemonadejs.net/components/datagrid)

Welcome to the React version of [Lemon Datagrid](https://github.com/lemonadejs/data-grid). This project makes DataGridLM usable in React.
For more information, please check the DataGridLM page.

## Features

-   Lightweight: DataGridLM is only about 5 Kbytes in size, making it fast and easy to load.
-   Customizable: You can define columns and user-defined actions to suit your specific use case.
-   Reactive: Any changes to the underlying data are automatically applied to the HTML, making it easy to keep your grid up-to-date.
-   Integration: DataGridLM can be used as a standalone library or integrated with LemonadeJS or React.

## Getting Started

### npm Installation

To install your project using npm, run the following command:

```bash
$ npm install @lemonadejs/datagrid-react
```

### Usage

In a React Component, you can directly call the Datagrid within the JSX by passing the **options** as props, along with the element's **ref**.

```javascript
import React, { useState, useRef } from 'react'
import Datagrid from '@lemonadejs/datagrid-react'

function Component() {
    const [data, setData] = useState([{ name: 'The Last of Us 2', releaseDate: '2022' }, { name: 'West World', releaseDate: '2017' }])
    const [columns, setColumns] = useState([{ name: 'name', headerName: 'Title' }, { name: 'releaseDate', headerName: 'Release Date' }])
    const datagridRef = useRef()

    return (
        <div>
            <Datagrid data={data} columns={columns} ref={datagridRef} />
        </div>
    )
}
```

### Examples

Here are a few examples of DataGridLM in action:

-   [Basic Data Grid Example](https://lemonadejs.net/components/datagrid#example-1)
-   [Example with Large Data Sets](https://lemonadejs.net/components/datagrid#example-2)
-   [Example with Data Addition and Deletion](https://lemonadejs.net/components/datagrid#example-3)

## Contributing

DataGridLM-React is an open source project and contributions are welcome! If you find a bug or have a feature request, please open an issue on GitHub. If you'd like to contribute code, please fork the repository and submit a pull request.

## License

DataGridLM is released under the MIT.
