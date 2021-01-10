import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

const Breadcrumb = ({ paths }) => {
  return (
    <BreadcrumbUI fontWeight="bold" mb={5}>
      {paths.map((p, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink href={p.path}>{p.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </BreadcrumbUI>
  );
};

export default Breadcrumb;
