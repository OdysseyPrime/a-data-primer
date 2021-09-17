import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import PVDHardReload from "assets/images/visual_data_hub/pvd_hard_reload.png"
import React, {Fragment} from "react";
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})

class PlainValuesDictionary extends React.Component {
    render() {
        const {section} = this.props

        let whatIs = section.children[0]
        let overcoming = section.children[1]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography id={whatIs.id} variant={'title'}>
                    What is Plain Values Dictionary?
                </Typography>
                <Typography variant={'p'}>
                    Plain Values Dictionary is a rare Spark error that arises when the column schema read (cached) by
                    Visual Data Hub is not the same as the original file. Let us assume we have one Parquet file that
                    contains two columns, columnA and columnB. If we load this through VDH and everything goes fine,
                    then the Importer → JSON Config will have an attribute that looks like this:
                </Typography>

                <Typography>
                    <Code>"schema": [&#123;"column": "columnA","type":
                        "INTEGER"&#125;,&#123;"column": "columnB","type": "STRING"&#125;]</Code>
                </Typography>

                <Typography>
                    From this point, two potential use cases might arise:
                    <ol>
                        <li>If the file is updated with one more column, let’s say columnC (meaning our parquet file now
                            has three columns, columnA, columnB and columnC), and the importer in the platform is not hard
                            reloaded, then the exported data will have two columns again. That means that the
                            schema is loaded from our importer module (cache) and not directly from the file.
                        </li>

                        <li>If the parquet’s column type is updated, for example columnA, INTEGER → STRING and the
                            importer in platform is not hard reloaded, then the Plain Values Dictionary error will pop up
                            when running the pipeline.
                        </li>
                    </ol>
                </Typography>

                <Typography id={overcoming.id} variant={'title'}>
                    Overcoming the issue
                </Typography>
                <Typography>
                    The solution to this is to update the importer module schema to be the same as the original files,
                    that is, either by:
                    <ul>
                        <li>Hard-refreshing the importer - this creates another request to clean cache and get the schema
                            content again.<Typography><img src={PVDHardReload}/></Typography></li>
                        <li>Removing the schema from the JSON Configuration module - this automatically loads everything
                            the original dataset schema contains.<Code>"schema": []</Code></li>
                    </ul>
                </Typography>

                <Typography>
                    This use case is very useful when you are working with versioned data, and you know that the schema
                    might eventually change.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(PlainValuesDictionary)
