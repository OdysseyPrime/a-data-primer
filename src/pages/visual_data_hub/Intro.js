import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import PageLink from "presentations/rows/nav/PageLink";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";

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
                <Typography variant='p'>
                    Visual Data Hub, aka. VDH is an Extract-Transform-Load service offered by the platform that allows
                    data on-boarding, processing, crawling and so on. This tool is the connecting bridge between raw
                    data numbers and useful insights that we call dashboards. This documentation will walk you through
                    key issues, details, tips and tricks so you have a clear idea how the tool is supposed to work, thus
                    leading to optimised and clear results.
                </Typography>
                <Typography variant='p'>
                    This guide contains the underlying pages:
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
