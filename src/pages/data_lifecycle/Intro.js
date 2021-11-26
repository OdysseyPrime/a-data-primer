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
                    In order to create end-to-end clean, non-redundant and under-control data, we must assure that they
                    follow a certain lifecycle that we at PRIME have created. This lifecycle starts with onboarding
                    the data, processing it and finally making it production ready.
                </Typography>
                <Typography variant={'p'}>
                    In this documentation, we will cover this whole process in details, thus making it easy for anyone
                    new to get an idea of what this workflow looks like. We will divide this explanation into three
                    topics; data onboarding, data processing and data delivery.
                </Typography>

                <Typography variant={'p'}>
                    You must read this until the end before starting using the platform.
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
