import { useState } from "react";
import { useHelp } from "@/contexts/HelpContext";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "sonner";

interface HelpFeedbackProps {
  articleId: string;
}

export function HelpFeedback({ articleId }: HelpFeedbackProps) {
  const { addFeedback } = useHelp();
  const [feedbackGiven, setFeedbackGiven] = useState<boolean | null>(null);

  const handleFeedback = (helpful: boolean) => {
    addFeedback(articleId, helpful);
    setFeedbackGiven(helpful);
    toast.success("Thanks for your feedback!");
  };

  return (
    <div className="mt-12 mb-8 pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <p className="text-sm font-medium text-foreground">Was this article helpful?</p>
      {feedbackGiven === null ? (
        <div className="flex gap-2">
          <button 
            onClick={() => handleFeedback(true)} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors bg-background"
          >
            <ThumbsUp className="h-4 w-4" /> Yes
          </button>
          <button 
            onClick={() => handleFeedback(false)} 
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-colors bg-background"
          >
            <ThumbsDown className="h-4 w-4" /> No
          </button>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">Thank you for your feedback!</p>
      )}
    </div>
  );
}
