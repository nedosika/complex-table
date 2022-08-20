import React from "react";

import DefaultTable from "../Table/DefaultTable";
import TableProvider from "../Table/useTableContext";
import UseSortingContext from "./modules/Sorting/useSortingContext";
import UseSelectionContext from "./modules/Selection/useSelectionContext";
import Pagination from "./modules/Pagination/Pagination";
import UseSearchingContext from "./modules/Search/useSearchingContext";
import Filtration from "./modules/Filtration/Filtration";
import RowsActions from "./modules/RowsActions/RowsActions";

const ComplexTable111 = ({ components, ...props }) => {
  return (
    <TableProvider value={props}>
      <UseSelectionContext>
        <UseSortingContext>
          <UseSearchingContext>
            <Filtration>
              <Pagination>
                <RowsActions>
                  <DefaultTable {...props} />
                </RowsActions>
              </Pagination>
            </Filtration>
          </UseSearchingContext>
        </UseSortingContext>
      </UseSelectionContext>
    </TableProvider>
  );
};

export default ComplexTable111;
