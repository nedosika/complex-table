import React from 'react';
import {useTableContext} from "./useTableContext";

const DefaultTable = () => {
    const {components: {Table, Header, Main, RowsList, Footer}} = useTableContext();
    console.log(useTableContext())
    return (
        <Table>
            <Header />
            <Main>
                <RowsList />
            </Main>
            <Footer />
        </Table>
    );
};

export default DefaultTable;