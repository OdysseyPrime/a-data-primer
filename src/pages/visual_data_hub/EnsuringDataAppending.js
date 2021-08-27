import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";

const styles = () => ({
    root: {},
})

class EnsuringDataAppending extends React.Component {
    render() {
        const {} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Ensuring Data Appending
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    To be filled
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(EnsuringDataAppending)
