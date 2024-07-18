import React from 'react';

import 'devextreme/dist/css/dx.light.css';

import {
    TreeList,
    Column,
    ColumnFixing,
    ColumnChooser,
    FilterRow,
    SearchPanel, 
    RequiredRule,
    Editing
} from 'devextreme-react/tree-list';
import { employees } from './employees';

function App() {
    return (
        <div className="App">
            <TreeList
            dataSource={employees}

                columnAutoWidth={true}
                allowColumnResizing={true}
                allowColumnReordering={true}
                rootValue={-1}
                keyExpr="ID"
                parentIdExpr="HeadID">
                <FilterRow visible={true} />
                <SearchPanel visible={true} />
                <Column dataField='FullName' > <RequiredRule /></Column>
                <Column dataField="Email" visible={false} />
                <ColumnChooser enabled={true} />
                <Column dataField='Position'><RequiredRule /></Column>
                <Column dataField='BirthDate'
                    dataType='date'
                    width={400}>
                </Column>
                <Column dataField='HireDate'
                    dataType='date' width={100}><RequiredRule /></Column>
                <Column dataField='City' />
                <Column dataField='State' />
                <Column dataField='Email' />
                <Column dataField='MobilePhone' />
                <Column dataField='Skype' />
                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                />
            </TreeList>
        </div>
    );
}

export default App;