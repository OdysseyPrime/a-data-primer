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
                    Visual Data Hub
                    <Divider/>
                </Typography>
                <Typography variant='p'>
                    The purpose of this workshop is to give the participants a deeper knowledge about Visual Data Hub as
                    a platform service and get them acquainted with the way of working, thus allowing them to be
                    sure and know the consequences of actions they take!
                </Typography>
                <Typography variant='p'>
                    This workshop contains these underlying pages:
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
