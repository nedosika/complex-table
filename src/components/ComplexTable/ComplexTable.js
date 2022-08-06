import React from "react";

import DefaultTable from "../Table/DefaultTable";
import TableProvider from "../Table/useTableContext";
import Sorting from "./Sorting/Sorting";
import Selection from "./Selection/Selection";
import Pagination from "./Pagination/Pagination";
import Searching from "./Search/Searching";

const ComplexTable = ({ components, ...props }) => {
  return (
    <TableProvider value={props}>
      <Selection>
        <Sorting>
          <Searching>
            <Pagination>
              <DefaultTable {...props}/>
            </Pagination>
          </Searching>
        </Sorting>
      </Selection>
    </TableProvider>
  );
};

export default ComplexTable;
