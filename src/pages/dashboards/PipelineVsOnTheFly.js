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
        const conclusion = section.children[2];

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
                    concatenation of those two.
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
                    The concatenation as a calculation is cheap, thus it is not time consuming. The case might not be
                    the same if we have filters and aggregations.
                </Typography>

                <Typography id={conclusion.id} variant={'title'}>
                    {conclusion.display}
                </Typography>

                <Typography variant={'p'}>
                    Having gone through the explanation, you might have come to understand that doing calculations on
                    the fly is a very heavy process.
                </Typography>

                <Typography variant={'p'}>
                    We want to avoid by any chance these calculations and stick to pipeline ones if possible.
                    A dashboard load is like running a small pipeline right when the button is clicked, while if
                    we have the calculations already done in the pipeline, results are easily accessible by Presto
                    through S3.
                </Typography>

                <Typography variant={'p'}>
                    An analogy of that: think of how fast would Data Overview show data if everything was in the
                    imported data and no calculations were done after importing.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DataSplitsAndPartitions)
