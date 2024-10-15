"use client";
import Activity from "@/components/activities/activity";
import Completed from "@/components/activities/completed";
import Validation from "@/components/activities/validation";
import useSession from "@/hooks/useSession";
import ActivityTheme from "@/themes/activity.theme";

export default function ActivityPage() {
  const { session, activeIndex, validated, isCorrect } = useSession();
  if (!session) return <></>;

  const active = session ? session[activeIndex] : null;
  const question = {
    actual: activeIndex + 1,
    total: session.length,
  };

  if (validated) {
    return <Validation isCorrect={isCorrect} />;
  }

  if (!active && session && activeIndex === session.length)
    return (
      <ActivityTheme>
        <Completed />
      </ActivityTheme>
    );

  return (
    <ActivityTheme>
      <Activity session={active} question={question} />
    </ActivityTheme>
  );
}
