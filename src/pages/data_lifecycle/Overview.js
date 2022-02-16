import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import {Table} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import S3RawImageSO from "assets/images/data_lifecycle/data_lifecycle_graph.jpg";

const styles = () => ({
    root: {},
})


class Overview extends React.Component {
    render() {
        const {section} = this.props

        const linkage = section.children[0]
        const graph = section.children[1]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    The goal of all this way-of-working is to keep things as isolated as possible, meaning only create
                    a new entity if one does not already exist. Below, we will point out a wrap of what we talked above
                    and illustrate it in real examples.
                </Typography>

                <Typography id={linkage.id} variant={'title'}>
                    {linkage.display}
                </Typography>

                <Typography variant={'p'}>
                    In order to have even more control over what we do, we apply the platform and s3 linkage.
                </Typography>

                <Typography variant={'p'}>
                    This is all about navigating through projects, file creations and dashboards with ease, without
                    having to check over the whole platform.
                </Typography>

                <Typography variant={'p'}>
                    Basically, the ideal goal is to have a project in platform represent a folder in S3, in our
                    standardized output this is as follows:
                    <Code>s3://prime-data-lake/production/client/vdh/</Code>
                </Typography>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Platform</TableCell>
                            <TableCell align="left">S3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">Standardized Output</TableCell>
                            <TableCell align="left">/standardized_output/</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Standardized Output > Raw</TableCell>
                            <TableCell align="left">/standardized_output/raw/</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Standardized Output > Raw > Store Mapper (pipe)</TableCell>
                            <TableCell align="left">/standardized_output/raw/store_mapper</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Standardized Output > Retail Template</TableCell>
                            <TableCell align="left">/standardized_output/retail_template/</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Standardized Output > Product 360</TableCell>
                            <TableCell align="left">/standardized_output/product_360/</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">ML Solutions > Promotion Effectiveness</TableCell>
                            <TableCell align="left">/solutions/promotion_effectiveness/</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">ML Solutions > Promotion Effectiveness > Input Prep</TableCell>
                            <TableCell align="left">/solutions/promotion_effectiveness/input_prep</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">Data Quality Assurance > Retail Template > Point of Sale</TableCell>
                            <TableCell align="left">/standardized_output/retail_template/DQA/point_of_sale</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Typography variant={'p'}>
                    The ideal table would look like this, but it’s normal to have stuff out of these restrictions as well.
                </Typography>

                <Typography id={graph.id} variant={'title'}>
                    {graph.display}
                </Typography>

                <Typography variant={'p'}>
                    A new created project, should at least have these components, where the:
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>Square represents a platform project (or subproject).</li>
                        <li>The name inside the square represents the project name.</li>
                        <li>The italic text under name represents corresponding S3 path.</li>
                        <li>The soft rectangle represents project components (pipelines, dashboards, etc., not subproject).</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    <img src={S3RawImageSO}/>
                </Typography>

                <Typography variant={'p'}>
                    This can also be called a starting point template for a new created project.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Overview)
