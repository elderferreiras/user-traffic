import React from 'react'
import { Pagination, Grid } from 'semantic-ui-react'

const SitePagination = (props) => {
    const totalPages = Math.ceil(props.total / props.limit);

    const pageChangeHandler = (event, data) => {
        props.setPage(data.activePage);
    };

    const totalShowing = props.offset + 1;
    const showingUntil = props.offset + props.limit > props.total ? props.total : props.offset + props.limit;

    return (
        <Grid className="pagination" divided='vertically' stackable>
            <Grid.Row columns={2}>
                <Grid.Column className="label" textAlign="left">
                    Showing {totalShowing} to {showingUntil} of {props.total} entries
                </Grid.Column>
                <Grid.Column className="pages" textAlign="right">
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={props.page}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={totalPages}
                        onPageChange={pageChangeHandler}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default SitePagination;
