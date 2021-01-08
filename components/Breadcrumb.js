import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from "@chakra-ui/react";

const Breadcrumb = ({ paths }) => {
  return (
    <BreadcrumbUI fontWeight="bold">
      {paths.map((p) => (
        <BreadcrumbItem>
          <BreadcrumbLink href={p.path}>{p.name}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </BreadcrumbUI>
  );
};

export default Breadcrumb;
