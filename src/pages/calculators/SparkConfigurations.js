import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment, useState} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import {Button, Checkbox, FormControlLabel, FormGroup, InputAdornment, Link, Table, TextField} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const styles = () => ({
    root: {},
})


function SparkConfigurations(props) {
    const {section} = props

    const [roundDown, setRoundDown] = useState(true)
    const handleRoundDown = () => setRoundDown(val => !val);

    const [calculated, setCalculated] = useState(false);

    const initSparkExecutorCores = 3
    const initEMRCoreInstances = 5
    const initEMRvCores = 8
    const initInstanceMemory = 30.5

    const [sparkExecutorCores, setSparkExecutorCores] = useState(initSparkExecutorCores);
    const [EMRCoreInstances, setEMRCoreInstances] = useState(initEMRCoreInstances);
    const [EMRvCores, setEMRvCores] = useState(initEMRvCores);
    const [instanceMemory, setInstanceMemory] = useState(initInstanceMemory);

    const [tableData, setTableData] = useState([]);

    const updateVariables = () => {
        if (sparkExecutorCores < 1 || EMRCoreInstances < 1 || EMRvCores < 1 || instanceMemory < 1) {
            alert("Please fill in the data properly!")

            return;
        }

        let configs = [];
        configs.push('Total EMR vCores: ' + EMRvCores, 'Available vCores: ' + (EMRvCores - 1))

        let expr;
        expr = (EMRvCores - 1) / sparkExecutorCores
        let numberOfExecutorsPerInstance = roundDown ? Math.floor(expr) : Math.ceil(expr);
        configs.push('Number of executors per node: ' + numberOfExecutorsPerInstance);

        expr = instanceMemory / numberOfExecutorsPerInstance
        let totalExecutorMemory = roundDown ? Math.floor(expr) : Math.ceil(expr);
        configs.push('Total memory per executor: ' + totalExecutorMemory + 'g');

        expr = totalExecutorMemory * 0.9
        let sparkExecutorMemory = roundDown ? Math.floor(expr) : Math.ceil(expr);
        configs.push('Available memory per executor: ' + sparkExecutorMemory + 'g');

        let sparkYarnExecutorMemoryOverhead = Math.ceil(totalExecutorMemory * 0.1)
        configs.push('Overhead memory: ' + sparkYarnExecutorMemoryOverhead + 'g');

        let sparkExecutorInstances = (numberOfExecutorsPerInstance * EMRCoreInstances) - 1
        let sparkDefaultParallelism = sparkExecutorInstances * sparkExecutorCores * 2
        configs.push('Spark default parallelism: ' + sparkDefaultParallelism);

        setTableData(configs);
        setCalculated(true);
    }

    const handleExecutorCoresChange = (event) => setSparkExecutorCores(event.target.value);
    const handleVCoresChange = (event) => setEMRvCores(event.target.value);
    const handleMemory = (event) => setInstanceMemory(event.target.value);
    const handleCoreInstances = (event) => setEMRCoreInstances(event.target.value);

    return (
        <Fragment>
            <Typography variant={'heading'}>
                {section.display}
                <Divider/>
            </Typography>

            <Typography variant={'p'}>
                Spark Configurations calculator allows the calculation of the configurations that we need to set in
                order to utilize EMR resources in the best way.
            </Typography>

            <Typography>
                <Link href="https://aws.amazon.com/blogs/big-data/best-practices-for-successfully-managing-memory-for-apache-spark-applications-on-amazon-emr/">
                    These calculations are based on official AWS documentation.</Link>
            </Typography>

            <Typography variant={'p'}>
                Below, we will describe in more details what the input boxes mean:

                <ol>
                    <li>Spark Executor Cores: the number of cores that we want to allocate to our Spark application.
                    </li>
                    <li>Instance vCores: virtual cores of one EMR core node.</li>
                    <li>Instance memory: memory of one EMR core node.</li>
                    <li>Number of core instances: the total number of EMR core (and task) nodes.</li>
                </ol>


            </Typography>

            <Typography><TextField label={'Spark Executor Cores'} style={{'width': '30%'}}
                                   onChange={handleExecutorCoresChange} variant={'outlined'}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">units</InputAdornment>,
                                   }}
                                   value={sparkExecutorCores}/></Typography>
            <Typography><TextField label={'Instance vCores (from AWS)'} style={{'width': '30%'}}
                                   onChange={handleVCoresChange}
                                   variant={'outlined'}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">units</InputAdornment>,
                                   }}
                                   value={EMRvCores}/></Typography>
            <Typography><TextField label={'Instance memory (from AWS)'} style={{'width': '30%'}} onChange={handleMemory}
                                   variant={'outlined'}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">GiB</InputAdornment>,
                                   }}
                                   value={instanceMemory}/></Typography>
            <Typography><TextField label={'Number of core instances (nodes) (from AWS)'} style={{'width': '30%'}}
                                   onChange={handleCoreInstances} variant={'outlined'}
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">units</InputAdornment>,
                                   }}
                                   value={EMRCoreInstances}/></Typography>
            <Typography><Button variant={'outlined'} onClick={updateVariables}>Calculate</Button></Typography>

            <Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color={'primary'} onChange={handleRoundDown} value={roundDown}/>}
                        label="Round down? (Less overhead resources)"/>
                </FormGroup>
            </Typography>

            {calculated ?
                <Table style={{width: '50%'}}>
                    <TableBody>
                        {tableData.map(info => (
                            <TableRow>
                                <TableCell width={'100%'}>{info}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> : null}
        </Fragment>
    )
}

export default withStyles(styles)(SparkConfigurations)
