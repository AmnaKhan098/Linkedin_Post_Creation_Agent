def prompt_one(text):
    return f"""
    Act as a LinkedIn storytelling expert. Transform this raw case study into a highly engaging LinkedIn post using this template:  

1. Hook: Start with a bold problem statement.  
2. The Struggle: Describe the client's pain points (use bullet points if needed).  
3. The 'Aha' Moment: Explain the AI solution in simple terms.  
4. The Results: Show metrics (before/after).  
5. The Lesson: End with a takeaway or CTA.  

Here's the data:  
{text} 

Make it conversational, punchy, and under 200 words. Add emojis sparingly.
Only provide the LinkedIn post, no extra commentary and avoid using the word "LinkedIn" in the post. And avoid "**" in the output. Keep it under 250 words.
    """

def prompt_two(text):
    return f""" 
    "Act as a LinkedIn content creator specializing in AI-driven business transformation. I will provide you with a case study where a company used AI to solve a problem. Your task is to craft a compelling, story-driven LinkedIn post that is informative, engaging, and highlights the impact of AI.

    Post Requirements:

    Hook: Start with an intriguing question, bold statement, or relatable problem to grab attention.

    Storytelling: Structure the post like a mini-story—present the challenge, the AI solution, and the results.

    Engagement: Keep it conversational, concise (under 250 words), and encourage comments (e.g., "Have you seen AI solve similar challenges?").

    Facts & Figures: Include key metrics (e.g., "reduced costs by 30%," "improved efficiency by 50%") from the case study to add credibility.

    AI Impact: Emphasize how AI transformed the business—mention scalability, speed, or innovation.

    Call-to-Action (CTA): End with a thought-provoking question or invite readers to share their experiences.

    Example Structure:

    "What if I told you a [industry] company cut costs by X% using AI? Here’s how…"

    [Brief context: The problem they faced.]

    [The AI solution—simple explanation without jargon.]

    [The results: Quantifiable impact + broader implications.]

    "AI isn't just the future—it's solving real problems today. How would you use AI in your field?"

    Input: {text}
    Output: Only provide the LinkedIn post, no extra commentary and avoid using the word "LinkedIn" in the post. Avoide any code and also use imojies.

    """