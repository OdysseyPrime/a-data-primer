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
                    Dashboards is a platform feature that allows the visual display of all our insights through a variety
                    of graphs. While dashboards can be used in all kinds of different ways, the primary intention is to provide
                    information at-a-glance, such as KPIs. Since dashboards are closely linked to Visual Data Hub,
                    sometimes it becomes an issue to load the visual insights when the data is not properly formatted.
                    We will do a round of explanation on how to get the most out of this tool, that being especially
                    performance.
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
