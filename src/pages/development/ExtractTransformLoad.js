import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import Code from "presentations/Code";
import ETLModel from "assets/images/development/ETLmodel.png";
import ETLInterceptor from "assets/images/development/ETLInterceptor.png";


const styles = () => ({
    root: {},
})


class ExtractTransformLoad extends React.Component {
    render() {
        const {section} = this.props

        const registering = section.children[0]
        const implementing = section.children[1]
        const thingsToConsider = section.children[2]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography variant={'p'}>
                    There are times that we want to add a drag-and-drop module in Visual Data Hub by using one or a
                    combination of Spark APIs.
                </Typography>

                <Typography variant={'p'}>
                    In order to do this, you need to have access to PRIME Github and have ETL repository cloned.
                </Typography>

                <Typography variant={'p'}>
                    With that set, we are ready to implement the module in our library.
                </Typography>

                <Typography variant={'p'}>
                    Let us assume that we want to add a Select As module, which does selecting and renaming at the
                    same time. From the types of modules we have (Importers, Processors and Exporters), we want this
                    one to be of type Processor. This means that our Select As module is not a final output neither
                    something that imports.
                </Typography>

                <Typography variant={'p'}>
                    In order to complete the procedure, we first have to register the module, then implement it's
                    function.
                </Typography>


                <Typography id={registering.id} variant={'title'}>
                    {registering.display}
                </Typography>

                <Typography variant={'p'}>
                    By registering the module, we let our deserializers know how to act upon a specific JSON object
                    mapping request.
                </Typography>

                <Typography variant={'p'}>
                    To register our module to the deserializers list, we first have to name our module in the specified
                    path:
                </Typography>

                <Code>
                    io.goprime.etl.models.stages.processor.pipes.ProcessingPipeType
                </Code>

                <Typography variant={'p'}>
                    Then use the ENUM variable in:
                </Typography>

                <Code>io.goprime.etl.models.gson.deserializers.processor.ProcessingPipeDeserializer#deserialize</Code>

                <Typography variant={'p'}>
                    In our specific case, the name registering looks as following:
                </Typography>

                <Code>
                    public enum ProcessingPipeType &#123;
                    ...,
                    SELECT_AS
                    &#125;
                </Code>

                <Typography>And the deserializing implementation looks like:</Typography>

                <Code>
                    case SELECT_AS:
                    return context.deserialize(json, SelectAsPipe.class);
                </Code>

                <Typography>Having this ready, we can finally start creating the SelectAsPipe and the
                    SelectAsInterceptor, where:</Typography>

                <Typography>
                    <ol>
                        <li>SelectAsPipe: defines the model which the JSON is mapped to.</li>
                        <li>SelectAsInterceptor: defines the behavior of Spark in response to this request.</li>
                    </ol>
                </Typography>

                <Typography id={implementing.id} variant={'title'}>
                    {implementing.display}
                </Typography>

                <Typography>The first thing we do at the implementation part is create our class that should
                    reside on:</Typography>

                <Code>io.goprime.etl.models.stages.processor.pipes</Code>

                <Typography>Regarding naming, we want to append 'Pipe' at the end of the module name, in our case,
                    SelectAsPipe.</Typography>

                <Typography>The class has to extend ProcessingPipe (which automatically assigns a unique ID).
                    We then continue to fill in the class, in our case we only want to have a List of
                    SelectAsTuple.
                </Typography>

                <Typography>Our model finally looks: io.goprime.etl.models.stages.processor.pipes.SelectAsPipe -
                    implemented in ETL repository. Let us elaborate the code.</Typography>

                <ul>
                    <Typography><Code>
                        @ToString(callSuper = true) - returns the value given to it in string format.
                    </Code></Typography>
                    <Typography><Code>
                        @EqualsAndHashCode(callSuper = true, of = "") - lets lombok generate implementations of the
                        equals(Object other) and hashCode() methods.</Code></Typography>
                    <Typography><Code>
                        @Data - automatically generates getters and setters.</Code></Typography>
                    <Typography><Code>
                        @Size(min = 1, message = "The column list shouldn't be empty") - an annotation that when
                        active, checks if the array size of 'columns' meets the condition.</Code></Typography>
                    <Typography><Code>
                        model.getColumns().stream().map... - Maps the list of objects to a list of columns, be
                        that renamed or not.</Code></Typography>
                </ul>

                <Typography>
                    We can now say that our model is complete and that we can start working on our interceptor.
                </Typography>

                <Typography>
                    The first thing we do is create a class called SelectAsInterceptor, where 'Interceptor' is appended
                    to the module name, just as 'Pipe' is appended to the model. This class has to extend Base
                    Interceptor, so it falls into the group of Interceptors where they are characterized with payload
                    attribute and execute method.
                </Typography>

                <Typography>
                    If we think about our module, we want to select all specified columns and only rename those needed.
                </Typography>

                <Typography>Our interceptor finally looks like this:
                    io.goprime.etl.processor.interceptors.SelectAsInterceptor - implemented in ETL
                    repository. Let us elaborate the code to have a better understanding:</Typography>

                <ul>
                    <Typography><Code>
                        @Interceptor(ofType = SelectAsPipe.class) - An annotation which links the model
                        with the interceptor, a one to one mapping.
                    </Code></Typography>
                    <Typography><Code>
                        SelectAsPipe model = (SelectAsPipe) this.payload.getModel() - The Java object which is
                        parsed from the JSON configuration.</Code></Typography>
                    <Typography><Code>
                        HibernateValidator.validate(model); - Enables the annotations declared in the model (in
                        our case, @Size).</Code></Typography>
                    <Typography><Code>
                        model.getColumns().stream().map... - Maps the list of objects to a list of columns, be
                        that renamed or not.</Code></Typography>
                </ul>

                <Typography>Then finally, we return the processed dataset and let the pipeline continue.</Typography>

                <Typography id={thingsToConsider.id} variant={'title'}>
                    {thingsToConsider.display}
                </Typography>

                <Typography>
                    Typically, when creating a new module, we have to answer these questions:
                </Typography>

                <Typography>
                    <ul>
                        <li>Is our module able to handle different inputs?</li>
                        <li>Is the code readable and is it the most optimal?</li>
                        <li>What type of module are we creating (for example, a processor, a string method, a 2D
                            function
                            that falls to a specific module type)?
                        </li>
                    </ul>
                </Typography>

                <Typography>
                    Other than this, we are good to go!
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(ExtractTransformLoad)
