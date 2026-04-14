import Interview from "../Model/interviewSchema.js";

export const createInterview=async(req,res)=>{
    try {
        const {title,role,difficulty}=req.body;

        const interview =await Interview.create({title,role,difficulty, createdBy:req.user._id});

        res.status(201).json({
            message:"Interview created successfully",
            interview
        })
        
    } catch (error) {
        res.status(503).json({message:"error in creating interview"});
        
    }


}


export const getInterview = async (req, res) => {
  try {
    const { id } = req.params;

    const interview = await Interview.findById(id)
      .populate("questions");

    res.status(200).json({
      interview
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching interview"
    });
  }
};

export const getAllInterviews = async (req, res) => {
    try {
        const interviews = await Interview.find();
        //in this place we can choose whether a user can attend a interview for a single time or multiple time

        res.status(200).json({
            message: "All interviews fetched",
            interviews
        });

    } catch (error) {
        res.status(500).json({ message: "Error fetching interviews" });
    }
};