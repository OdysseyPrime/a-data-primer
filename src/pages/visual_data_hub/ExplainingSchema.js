import withStyles from "@material-ui/core/styles/withStyles";
import Divider from "presentations/Divider";
import Typography from "presentations/Typography";
import React, {Fragment} from "react";
import Code from "presentations/Code";
import InferedSchemaParquet from "assets/images/visual_data_hub/infered_schema_parquet.png"
import SetVsInfered from "assets/images/visual_data_hub/setvsinfered.png"
import EditingSchema from "assets/images/visual_data_hub/editing_schema.png"
import {Table} from "@material-ui/core";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";


const styles = () => ({
    root: {},
})

class ExplainingSchema extends React.Component {
    render() {
        const {section} = this.props

        let example1explainingSchema = section.children[0]
        let example2explainingSchema = section.children[1]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    The database schema is its structure described in a formal language supported by the database
                    management system (DBMS). In any coding language that includes data frame operations, be that
                    R, Python, Java or other ones, there are two possibilities when you read a file.
                </Typography>

                <Typography>
                    From this point, two potential use cases might arise:
                    <ol>
                        <li>Infer schema: let the application decide about the data types of specific columns; this
                            means that the application will get a sample of rows and try to set a type to them. Note,
                            this happens on a sample level and can sometimes cause trouble.
                        </li>

                        <li>Set schema yourself: you can set the types as what you expect the values to be.
                            This can also cause some trouble, but makes sure that the data is strictly as we wish it
                            to be.
                        </li>
                    </ol>
                </Typography>


                <Typography id={example1explainingSchema.id} variant={'title'}>
                    {example1explainingSchema.display}
                </Typography>

                <Typography>
                    Suppose we want to read a CSV with this content in Platform:
                </Typography>
                <Table style={{width: '25%'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="left">"1-Mars"</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">25</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left">3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="left"/>
                        </TableRow>
                    </TableBody>
                </Table>

                <Typography variant={'p'}>
                    If we do not specify the schema and let the application infer it, we get the following result:
                </Typography>

                <Typography variant={'p'}>
                    <img src={InferedSchemaParquet}/>
                </Typography>


                <Typography variant={'p'}>
                    This means that every value is represented as string, thus doing numeric calculations is not
                    possible since the values are not numerical.
                </Typography>

                <Typography variant={'p'}>
                    Since most of the columns are numbers, we would like this to be a number and not a string, but
                    the application (platform in this case) will keep making it string by default. In order to have this
                    format as we want, it is better to set the schema ourselves, in our case, say we want the column
                    to be integer.
                </Typography>

                <Typography variant={'p'}>
                    In the platform, we can do this by changing the schema type, while in code, you can just create
                    your own schema structure.
                </Typography>

                <Typography variant={'p'}>
                    <img src={EditingSchema}/>
                </Typography>

                <Typography variant={'p'}>
                    Having done that, now, the final result looks like this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={SetVsInfered}/>
                </Typography>

                <Typography variant={'p'}>
                    We can perform numerical calculations on the left side since it has integers, the right one
                    has strings, therefore no numerical operations are available.
                </Typography>

                <Typography variant={'p'}>
                    In platform, if we want the application to infer schema, we have to remove it from JSON Configuration
                    block in module, as explained in Module JSON Config guide.
                </Typography>

                <Typography id={example2explainingSchema.id} variant={'title'}>
                    {example2explainingSchema.display}
                </Typography>

                <Typography variant={'p'}>
                    Suppose we have an incoming file that we know that a decimal number is coming, but it sometimes
                    comes with dot as decimal separator, sometimes comes with comma. For example: sometimes we have
                    21.15, sometimes we have 21,15.
                </Typography>

                <Typography variant={'p'}>
                    In order to process this file properly, we might want to read the file as string, check if the file
                    has a comma or a dot, then cast it to the right format and keep processing it further.
                </Typography>

                <Typography variant={'p'}>
                    To do this, we want to modify the type to string (as in the image above), then use the following
                    expression:
                </Typography>

                <Code>
                    cast(replace(input,',','.') as double)
                </Code>

                <Typography variant={'p'}>
                    The strings that have commas will be replaced with dots, while the ones that don't will move
                    forward. We then cast it as double, therefore making possible numerical calculations. This way,
                    we do not care if the input is a real double (with dot) or a string (with comma). We just force the
                    type to be string, thus making possible file processing.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(ExplainingSchema)
