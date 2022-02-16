import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment, useState} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import {Button, InputAdornment, Table, TextField} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const styles = () => ({
    root: {},
})


function SparkConfigurations(props) {
    const {section} = props

    const [calculated, setCalculated] = useState(false);

    const initSparkExecutorCores = 5
    const initEMRCoreInstances = 19
    const initEMRvCores = 48
    const initInstanceMemory = 384

    const [sparkExecutorCores, setSparkExecutorCores] = useState(initSparkExecutorCores);
    const [EMRCoreInstances, setEMRCoreInstances] = useState(initEMRCoreInstances);
    const [EMRvCores, setEMRvCores] = useState(initEMRvCores);
    const [instanceMemory, setInstanceMemory] = useState(initInstanceMemory);

    const [data, setData] = useState({});

    const updateVariables = () => {
        if (sparkExecutorCores < 1 || EMRCoreInstances < 1 || EMRvCores < 1 || instanceMemory < 1) {
            alert("Please fill in the data properly!")

            return;
        }

        let numberOfExecutorsPerInstance = Math.floor((EMRvCores - 1) / sparkExecutorCores);
        let totalExecutorMemory = Math.floor(instanceMemory / numberOfExecutorsPerInstance)
        let sparkExecutorMemory = Math.floor(totalExecutorMemory * 0.9)
        let sparkYarnExecutorMemoryOverhead =  Math.ceil(totalExecutorMemory * 0.1)
        let sparkExecutorInstances = (numberOfExecutorsPerInstance * EMRCoreInstances) - 1
        let sparkDefaultParallelism = sparkExecutorInstances * sparkExecutorCores * 2

        setData({
            numberOfExecutorsPerInstance, totalExecutorMemory, sparkExecutorMemory,
            sparkYarnExecutorMemoryOverhead, sparkExecutorInstances, sparkDefaultParallelism
        })

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
                Spark Configurations calculator allows the calculation of the configurations that we need to set in order
                to utilize EMR resources in the best way.
            </Typography>

            <Typography variant={'p'}>
                Below, we will describe in more details what the input boxes mean:

                <ol>
                    <li>Spark Executor Cores: the number of cores that we want to allocate to our Spark application.</li>
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
            <Typography><TextField label={'Instance vCores (from AWS)'} style={{'width': '30%'}} onChange={handleVCoresChange}
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

            {calculated ?
                <Table style={{width: '50%'}}>
                    <TableBody>
                        <TableRow>
                            <TableCell width={'80%'}>Number of executors per instance</TableCell>
                            <TableCell width={'20%'}>{data.numberOfExecutorsPerInstance}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={'80%'}>Total executor memory</TableCell>
                            <TableCell width={'20%'}>{data.totalExecutorMemory}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={'80%'}>spark.executors.memory</TableCell>
                            <TableCell width={'20%'}>{data.sparkExecutorMemory}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={'80%'}>spark.yarn.executor.memoryOverhead</TableCell>
                            <TableCell width={'20%'}>{data.sparkYarnExecutorMemoryOverhead}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={'80%'}>spark.executor.instances</TableCell>
                            <TableCell width={'20%'}>{data.sparkExecutorInstances}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell width={'80%'}>spark.default.parallelism</TableCell>
                            <TableCell width={'20%'}>{data.sparkDefaultParallelism}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table> : null}
        </Fragment>
    )
}

export default withStyles(styles)(SparkConfigurations)
