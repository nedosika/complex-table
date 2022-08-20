import React from "react";

import DefaultTable from "../Table/DefaultTable";
import TableProvider from "../Table/useTableContext";
import Sorting from "./modules/Sorting/Sorting";
import UseSelectionContext from "./modules/Selection/useSelectionContext";
import Pagination from "./modules/Pagination/Pagination";
import Searching from "./modules/Search/Searching";
import Filtration from "./modules/Filtration/Filtration";
import RowsActions from "./modules/RowsActions/RowsActions";

const ComplexTable111 = ({ components, ...props }) => {
  return (
    <TableProvider value={props}>
      <UseSelectionContext>
        <Sorting>
          <Searching>
            <Filtration>
              <Pagination>
                <RowsActions>
                  <DefaultTable {...props} />
                </RowsActions>
              </Pagination>
            </Filtration>
          </Searching>
        </Sorting>
      </UseSelectionContext>
    </TableProvider>
  );
};

export default ComplexTable111;
