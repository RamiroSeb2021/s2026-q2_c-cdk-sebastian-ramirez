import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class S2026Q2CCdkSebastianRamirezStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define the Lambda function
    const myFunction = new lambda.Function(this, "HellowWorld", {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: lambda.Code.fromInline(`
        exports.handler = async (event) => {
          return {
            statusCode: 200,
            body: JSON.stringify('Hello CDK! '),
          };
        };
      `),
    });

    // Define the lambda function URL resource
    const myFunctionUrl = myFunction.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    // Define a CloudFormation output for your URL
    new cdk.CfnOutput(this, "myFunctionUrlOutput", {
      value: myFunctionUrl.url,
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'S2026Q2CCdkSebastianRamirezQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
