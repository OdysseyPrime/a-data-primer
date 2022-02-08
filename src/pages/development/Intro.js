import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import PageLink from "presentations/rows/nav/PageLink";

const styles = () => ({
    root: {},
})

class Intro extends React.Component {
    render() {
        const {section} = this.props
        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    Development is part of our process where the goal is to improve our module Virtual Data Hub aka.
                    VDH by creating/optimizing new/existing Nodes which platform users can use with drag and drop while
                    they create/build pipelines.
                </Typography>

                <Typography variant={'p'}>
                    This is done in order to increase efficiency, while introducing new functionality within the VDH.
                </Typography>

                <Typography variant='p'>
                    This service contains the underlying pages:
                    <ol>
                        {section.children.map(next => <li key={next.id}>
                            <PageLink to={`/lecture/${next.id}/`}>{next.display}</PageLink>
                        </li>)}
                    </ol>
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Intro)
