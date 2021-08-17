import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import JSONConfigUIPath from "assets/images/visual_data_hub/jsonconfig_ui_path.png"
import JSONConfigPathConfig from "assets/images/visual_data_hub/jsonconfig_path_config.png"

import React, {Fragment} from "react";
import Code from "presentations/Code";

const styles = () => ({
    root: {},
})

class ModuleJSONConfig extends React.Component {
    render() {
        const {} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Module JSON Config
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    If you hover through a module options, you will find JSON Config. What is that exactly?
                </Typography>

                <Typography variant={'p'}>
                    JSON Configuration is the second method to editing a module beside UI. It contains hidden
                    information from the UI and no API call is triggered on change.
                </Typography>

                <Typography variant={'p'}>
                    For example, if you update the path here:
                </Typography>
                <Typography>
                    <img src={JSONConfigUIPath}/>
                </Typography>
                <Typography variant={'p'}>
                    Then the system will automatically update the schema for you, thus changing the Column Overview
                    to dataset respective schema.
                </Typography>
                <Typography variant={'p'}>
                    But if you do that in here:
                </Typography>
                <Typography>
                    <img src={JSONConfigPathConfig}/>
                </Typography>
                <Typography variant={'p'}>
                    Then it is guaranteed that no API call will be made, thus leaving everything as is in the module.
                </Typography>
                <Typography variant={'p'}>
                    This is a very nice workaround that you can do when you want to load a big data set for example.
                    Since data is too big, then what you can do is load one partition:
                </Typography>
                <Code>s3://prime-data-lake/production/pos/part-00000-0120aa5d-0619-4481-9ed7-3b2fef33eb30-c000.snappy.parquet</Code>
                <Typography variant={'p'}>
                    Then remove the partition part in JSON Configuration to:
                </Typography>
                <Code>s3://prime-data-lake/production/pos/</Code>
                <Typography variant={'p'}>
                    This way we are using the full data set with a sample of one partition which is loaded super fast
                    through VDH. We avoid scanning through full table, which saves a lot of time.
                </Typography>

                <Typography variant={'p'}>
                    There a lot of options in there as well that you can not find in UI, for example:
                    <ul>
                        <li>The optimize flag: set to true, allows your data to be exported with a data size that you
                            specify, in
                            our case, Spark will try to export a partition to 128MB.
                            <Code> "optimize": &#123;
                                "enabled": true,
                                "size": 128,
                                "tolerance": 5,
                                "set": false
                                &#125;
                            </Code>
                        </li>
                        <li>
                            The importer SFTP flag: enables SFTP for an importer, thus allowing to dynamically load
                            data from an SFTP server by providing credentials, in our case, we are reading data from
                            a test site where username is demo and password is password on port 22.
                            <Code>
                                "sftp": &#123;
                                "enabled": true,
                                "host": "test.rebex.net:22",
                                "username": "demo",
                                "password": "password",
                                "port": 22
                                &#125;
                            </Code>
                        </li>
                    </ul>
                </Typography>

                <Typography variant={'p'}>
                    By default, these settings are disabled but can be enabled only through the JSON Configuration
                    section. This section also allows us to use modules which we do not currently have an UI for,
                    for example (at the moment of writing this):
                    <ol>
                        <li>Euclidean Distance</li>
                        <li>Left Anti Join</li>
                    </ol>
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(ModuleJSONConfig)
