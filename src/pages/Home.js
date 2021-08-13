import withStyles from "@material-ui/core/styles/withStyles";
import Divider from 'presentations/Divider';
import Typography from 'presentations/Typography';
import React, {Fragment} from "react";

const styles = () => ({
    root: {},
})

/**
 * Home Page component
 */
class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Prime Workshops
                </Typography>

                <Typography variant={'p'}>
                    Hello and welcome to PRIME Workshops, the place where knowledge is shared all over the team through
                    a neat and organized, well-documented page as this one.
                </Typography>

                <Typography variant={'p'}>
                    In order to be up-to-date with all features and modules that we at PRIME offer, it is recommended
                    to check these pages out, as you will get an idea on how things are supposed to work and how to
                    make the most out of them.
                </Typography>

                <Typography variant={'p'}>
                    Things are high-level explained and you will gain as much
                    knowledge as to be comfortable and in control of the tools you use, since a lot of them have
                    great power and can escalate if not used properly.
                </Typography>

                <Typography variant={'p'}>
                    We will go through platform modules, like Visual Data Hub (aka. VDH) or Scheduler, but not leaving
                    aside big external modules that are not part of the platform aside like promotion effectiveness,
                    shopper trips etc.
                </Typography>

                <Typography variant={'p'}>
                    This project is still in development and we are more than happy to any feedback related either
                    to the UI or to the specific workshops. If you think you can contribute to this project, feel
                    free to pull this repository from Github and create merge requests after your correction(s) or
                    addition(s).
                </Typography>

                <Typography variant={'p'}>
                    Cheers, PRIME.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Home)
