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
                    Calculator is an utility tool that we use to calculate different measurements, be that Spark,
                    AWS or Platform related.
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
