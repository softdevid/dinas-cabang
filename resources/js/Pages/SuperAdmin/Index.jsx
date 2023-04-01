import SuperAdminTemplate from "@/Layouts/SuperAdminTemplate";
import { Head } from "@inertiajs/react";

const Index = (props) => {
  return (
    <>
      <Head title={props.title} />
      <h1>Testing</h1>
    </>
  );
};

Index.layout = (page) => <SuperAdminTemplate children={page} />;
export default Index;
