import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import YourOwnField from "assets/images/dashboards/pipe_vs_otf_create_your_own.png"
import ConcatModule from "assets/images/dashboards/pipe_vs_otf_concat_module.png"
import Code from "presentations/Code";


const styles = () => ({
    root: {},
})


class DataSplitsAndPartitions extends React.Component {
    render() {
        const {section} = this.props

        const yourOwnField = section.children[0];
        const pipelineModule = section.children[1];

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    A big effect on the performance of dashboards is caused by the calculations we do.
                </Typography>

                <Typography variant={'p'}>
                    Let us assume the following use case, we have a product_group_code and a product_group_name, the
                    containing of which is not to our interest. We need to display in the dashboard a
                    concatenation of those two;
                </Typography>

                <Typography variant={'p'}>
                    We have two options to make this possible;
                </Typography>

                <Typography id={yourOwnField.id} variant={'title'}>
                    {yourOwnField.display}
                </Typography>

                <Typography variant={'p'}>
                    Your Own Field is an option provided by Dashboards when you use filters. That option allows you
                    to simulate a new column on your table that is calculated while the Widgets are being loaded, also
                    known as On The Fly calculation.
                </Typography>

                <Typography variant={'p'}>
                    That option looks like this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={YourOwnField}/>
                </Typography>

                <Typography variant={'p'}>
                    Since we want to concat two columns, we can use the following expression:
                </Typography>

                <Code>
                    concat(cast(product_group_code as string), '-',product_group_name)
                </Code>

                <Typography variant={'p'}>
                    With this action, we are forcing the dashboard to calculate our own written expressions after the
                    initial data from S3 has been read from Presto. If the platform does not hit cache, then this
                    calculation will be repeated over and over again.
                </Typography>

                <Typography id={pipelineModule.id} variant={'title'}>
                    {pipelineModule.display}
                </Typography>

                <Typography variant={'p'}>
                    Another option is to create this column while creating the Visual Data Hub pipeline. Since this can
                    be done through many modules, we will use the one that works the same as Your Own Field, and that
                    is Column Expression.
                </Typography>

                <Typography variant={'p'}>
                    Creation of that module before the data export:
                </Typography>

                <Typography variant={'p'}>
                    <img src={ConcatModule}/>
                </Typography>

                <Typography variant={'p'}>
                    With this action, we spare the Dashboard from calculating additional stuff once the data has been
                    scanned from S3.
                </Typography>

                <Typography variant={'p'}>
                    The concatenation as a calculation is cheap, thus it is not time consuming. If we take into
                    consideration some other examples, like aggregation, then the situation gets a lot worse.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DataSplitsAndPartitions)
