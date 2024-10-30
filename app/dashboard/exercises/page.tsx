import { ContentWrapper } from "@/components";
import PageHeader from "@/components/elements/page-header/PageHeader";

import React from "react";
import ExercisesTable from "@/components/section/exercises/exercises-table/ExercisesTable";
import Modal from "@/components/elements/modal/Modal";
import ExerciseModal from "@/components/section/exercises/ExerciseModal";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Exercises = ({ searchParams }: SearchParamProps) => {
  const addExercise = searchParams?.addExercise;
  return (
    <div className="w-full overflow-auto ">
      {addExercise && <ExerciseModal />}

      <ContentWrapper className="pt-4 w-full ">
        <PageHeader />
      </ContentWrapper>

      <ContentWrapper className="overflow-x-auto h-[80vh] ">
        <ExercisesTable className="mt-8" />
      </ContentWrapper>
    </div>
  );
};

export default Exercises;
