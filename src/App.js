import React, { useCallback, useState } from 'react';

import 'devextreme/dist/css/dx.light.css';

import {
    TreeList,
    Column,
    ColumnFixing,
    ColumnChooser,
    FilterRow,
    SearchPanel,
    RequiredRule,
    Editing,
    Toolbar,
    Item,
    Selection
} from 'devextreme-react/tree-list';
import { employees } from './employees';
import { Button } from 'devextreme-react/button';


function SelectedEmployee(props) {
    if (props.employee) {
        return (
            <p id="selected-employee">
                Selected employee: {props.employee.FullName}
            </p>
        );
    }
    return null;
}
function App() {
    const [expanded, setExpanded] = useState(true);
    const [expandedRowKeys, setExpandedRowKeys] = useState([]);

    const onOptionChanged = useCallback((e) => {
        if (e.name === 'expandedRowKeys') {
            setExpandedRowKeys(e.value);
        }
    }, []);
    const [selectedEmployee, setSelectedEmployee] = useState();
    const selectEmployee = useCallback((e) => {
        e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
            setSelectedEmployee(employee);
        });
    }, []);
    return (
        <div className="App">
            <TreeList
                autoExpandAll={expanded}
                expandedRowKeys={expandedRowKeys}
                onOptionChanged={onOptionChanged}
                onSelectionChanged={selectEmployee}
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
                <ColumnChooser enabled={true} />
                <Column dataField='Position'><RequiredRule /></Column>
                <Column dataField='BirthDate'
                    dataType='date'
                >
                </Column>
                <Column dataField='HireDate'
                    dataType='date' width={100}><RequiredRule /></Column>
                <Column dataField='City' />
                <Column dataField='State' />
                <Column dataField='Email' visible={false} />
                <Column dataField='MobilePhone' />
                <Column dataField='Skype' />
                <Column dataField='Choosing' />
                <FilterRow visible={true} />
                <SearchPanel visible={true} />
                <Selection mode="single" />

                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                    ColumnFixing={true}
                    ColumnChooser={true}

                />
               <Toolbar>
                    <Item location="after">
                        <Button
                            text={expanded ? 'Collapse All' : 'Expand All'}
                            width={136}
                            onClick={() => {
                                setExpanded(prevExpanded => !prevExpanded)
                                setExpandedRowKeys([]);
                            }}
                        />
                    </Item>
                    <Item name="addRowButton" showText="always" />
                    <Item name="exportButton" />
                    <Item name="columnChooserButton" />
                    <Item name="searchPanel" />
                </Toolbar>
            </TreeList>
        </div>
    );
}

export default App;