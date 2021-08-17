import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import GlobsWildcard from "assets/images/visual_data_hub/globs_wildcard.png"
import GlobsExample2 from "assets/images/visual_data_hub/globs_example2.png"
import GlobsExample3 from "assets/images/visual_data_hub/globs_example3.png"
import GlobsExample4 from "assets/images/visual_data_hub/globs_example4.png"
import GlobsExample5 from "assets/images/visual_data_hub/globs_example5.png"
import GlobsExample6 from "assets/images/visual_data_hub/globs_example6.png"

import React, {Fragment} from "react";
import {Link} from "@material-ui/core";

const styles = () => ({
    root: {},
})

class GlobPatterns extends React.Component {
    render() {
        const {section} = this.props

        let example1 = section.children[0]
        let example2 = section.children[1]
        let example3 = section.children[2]
        let example4 = section.children[3]
        let example5 = section.children[4]
        let example6 = section.children[5]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    Glob Patterns
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    Globs are the patterns you use when you run commands such as ls src/*.js, or you might see them
                    used in config files such as a .gitignore where you might see .cache/*, for example. The glob
                    module finds all the path names matching a specified pattern according to the rules used by the Unix
                    shell, although results are returned in arbitrary order.
                </Typography>

                <Typography variant={'p'}>
                    In Visual Data Hub, we use globs in almost every pipeline (the wildcard symbol). Let us assume we
                    have four CSV files to read data from. The CSV files are named:
                    <ol>
                        <li>data_first</li>
                        <li>data_second</li>
                        <li>data_third</li>
                        <li>data_fourth</li>
                    </ol>
                    Each of them have only one column named name and one row named filenameUser, meaning CSV file
                    data_first has one row which contains firstUser. We will go through some examples from VDH below;
                </Typography>

                <Typography id={example1.id} variant={'title'}>
                    {example1.display}
                </Typography>
                <Typography variant={'p'}>
                    Reading everything inside the directory (double wildcards filter within directory in a
                    recursive manner).
                </Typography>
                <Typography variant={'p'}>
                    <img src={GlobsWildcard} />
                </Typography>
                <Divider/>

                <Typography id={example2.id} variant={'title'}>
                    {example2.display}
                </Typography>
                <Typography variant={'p'}>
                    Reading data_first and data_fourth, but not data_second and data_third.
                </Typography>
                <Typography variant={'p'}>
                    <img src={GlobsExample2} />
                </Typography>
                <Divider/>

                <Typography id={example3.id} variant={'title'}>
                    {example3.display}
                </Typography>
                <Typography variant={'p'}>
                    Reading everything but data_fourth.
                </Typography>
                <Typography variant={'p'}>
                    <img src={GlobsExample3} />
                </Typography>
                <Divider/>

                <Typography id={example4.id} variant={'title'}>
                    {example4.display}
                </Typography>
                <Typography variant={'p'}>
                    Reading everything that starts with data_f and has four characters behind.
                </Typography>
                <Typography variant={'p'}>
                    <img src={GlobsExample4} />
                </Typography>
                <Divider/>

                <Typography id={example5.id} variant={'title'}>
                    {example5.display}
                </Typography>
                <Typography variant={'p'}>
                    Reading everything that starts with data_f or data_s.
                </Typography>
                <Typography variant={'p'}>
                    <img src={GlobsExample5} />
                </Typography>
                <Divider/>

                <Typography id={example6.id} variant={'title'}>
                    {example6.display}
                </Typography>
                <Typography variant={'p'}>
                    Reading data_second, data_first and data_fourth.
                </Typography>
                <Typography variant={'p'}>
                    <img src={GlobsExample6} />
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(GlobPatterns)
