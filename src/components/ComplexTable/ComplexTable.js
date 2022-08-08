import React from "react";

import DefaultTable from "../Table/DefaultTable";
import TableProvider from "../Table/useTableContext";
import Sorting from "./Sorting/Sorting";
import Selection from "./Selection/Selection";
import Pagination from "./Pagination/PaginationInjector";
import Searching from "./Search/Searching";
import Filtration from "./Filtration/Filtration";

const ComplexTable = ({ components, ...props }) => {
  return (
      <TableProvider value={props}>
        <Selection>
          <Sorting>
            <Searching>
              <Filtration>
                <Pagination>
                  <DefaultTable {...props} />
                </Pagination>
              </Filtration>
            </Searching>
          </Sorting>
        </Selection>
      </TableProvider>
  );
};

export default ComplexTable;
