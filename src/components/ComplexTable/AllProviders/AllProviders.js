import React from "react";
import Selection from "../modules/Selection/Selection";
import RootProvider from "../../Table/useRootContext";
import Pagination from "../modules/Pagination/Pagination";
import Searching from "../modules/Search/Searching";
import Sorting from "../modules/Sorting/Sorting";
import Filtration from "../modules/Filtration/Filtration";
import RowsActions from "../modules/RowsActions/RowsActions";
import Accordion from "../modules/Accordion/Accordion";
import InfiniteScroll from "../modules/InfiniteScroll/InfiniteScroll";

const AllProviders = ({ children, ...props }) => {
  return (
    <RootProvider {...props}>
      <Selection>
        <Searching>
          <Sorting>
            <Filtration>
              <RowsActions>
                <Accordion>
                  <Pagination>
                    <InfiniteScroll>
                      {children}
                    </InfiniteScroll>
                  </Pagination>
                </Accordion>
              </RowsActions>
            </Filtration>
          </Sorting>
        </Searching>
      </Selection>
    </RootProvider>
  );
};

export default AllProviders;
