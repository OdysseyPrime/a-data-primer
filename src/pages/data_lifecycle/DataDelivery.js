import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})


class DataOnboarding extends React.Component {
    render() {
        const {section} = this.props

        const platformModules = section.children[0]
        const mlSolutions = section.children[1]
        const deliverables = section.children[2]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    Once we have the point of sale, receipt data and the mapper files in place, we are ready to use
                    this data as input to our analytic models, so we have meaningful dashboards to get insight from.
                    When it comes to PRIME modules, we can divide them into two big categories, as explained below.
                </Typography>

                <Typography id={platformModules.id} variant={'title'}>
                    {platformModules.display}
                </Typography>

                <Typography variant={'p'}>
                    Modules which are generated end-to-end via VDH are a part of this, this also includes solutions.

                </Typography>

                <Typography variant={'p'}>
                    For example, the module called Basic Overviews is not a solution but is a part of this category
                    because it is a standard module (created in every client’s environment) and it is generated
                    completely on VDH (does not require a lot of processing power), Product 360 has both these
                    attributes
                    as well but it is a solution (because it is used on direct client dashboards for insight, while
                    basic overviews serves more to PRIME team for internal checks).
                </Typography>

                <Typography variant={'p'}>
                    When creating a new platform module, we must make sure that we are in Standardized Output, and that
                    the name of the project must be the same as every S3 export.
                </Typography>

                <Typography variant={'p'}>
                    For example, above mentioned modules are mapped on S3 as:
                    <Code>
                        /standardized_output/basic_overviews/week_total_data/
                    </Code> or
                    <Code>
                        /standardized_output/product_360/total_data/
                    </Code>
                    and so on.
                </Typography>

                <Typography id={mlSolutions.id} variant={'title'}>
                    {mlSolutions.display}
                </Typography>

                <Typography variant={'p'}>
                    Solutions that are created by machine learning libraries and require much more processing power than
                    the usual ones, we run such models on separate, powerful clusters for faster processing time.
                </Typography>

                <Typography variant={'p'}>
                    These solutions are written in Scala and are not a part of the platform by any mean. In order to
                    run a machine learning solution, you must point to the appropriate JAR file on S3 through EMR.
                    At this moment, we have three such solutions:
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>Promotion Effectiveness</li>
                        <li>Shopper Trips</li>
                        <li>Store Segmentation</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    These solutions are scheduled to run automatically, and normally only the output of these results
                    is processed in VDH. When creating a solution in VDH which contains any of the above mentioned,
                    we must make sure that we are in Standardized Output project, ML Solutions subproject, and as for
                    S3, the export is not limited to standardized output.
                </Typography>

                <Typography id={deliverables.id} variant={'title'}>
                    {deliverables.display}
                </Typography>

                <Typography variant={'p'}>
                    This part of the platform usually contains mostly exports, because the results are directly
                    presented to the clients. It is made of:
                </Typography>

                <Typography variant={'p'}>
                    <ul>
                        <li>Algemeen</li>
                        <li>Promotie</li>
                        <li>Formule</li>
                        <li>Categorie Management</li>
                    </ul>
                </Typography>

                <Typography variant={'p'}>
                    The names stay in client favorable language (for example, this is in Dutch, as is the client).
                    These projects are maintained by data delivery team together with the client team.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(DataOnboarding)
