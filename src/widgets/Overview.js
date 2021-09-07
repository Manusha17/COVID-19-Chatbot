import Options from "./Options";

const GeneralOptions = (props) => {
  const options = [
    {
      name: "Show global statistics",
      handler: props.actionProvider.handleGlobalStats,
      id: 1
    },
    {
      name: "Show local statistics",
      handler: props.actionProvider.handleLocalStats,
      id: 2
    },
    {
      name: "Emergency contact",
      handler: props.actionProvider.handleContact,
      id: 3
    },
    {
      name: "Clinical medicine delivery",
      handler: props.actionProvider.handleMedicine,
      id: 4
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
